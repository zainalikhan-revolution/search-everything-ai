'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/components/auth/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  CreditCard, 
  Users, 
  Zap, 
  Crown, 
  Building,
  Star,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Calendar,
  DollarSign
} from 'lucide-react';

interface SubscriptionData {
  id: string;
  plan: string;
  tasks_limit: number;
  tasks_used: number;
  billing_cycle_start: string | null;
  billing_cycle_end: string | null;
  active: boolean;
}

interface SubscriptionManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubscriptionManager({ isOpen, onClose }: SubscriptionManagerProps) {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [upgrading, setUpgrading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (isOpen && user) {
      fetchSubscriptionData();
    }
  }, [isOpen, user]);

  const fetchSubscriptionData = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Subscription fetch error:', error);
        toast.error('Failed to load subscription data');
      } else {
        setSubscription(data);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleUpgrade = async (planName: string) => {
    setUpgrading(true);
    
    try {
      // Here you would integrate with Stripe/PayPal for actual payment processing
      toast.info(`Redirecting to payment for ${planName} plan...`);
      
      // Simulate payment success for demo
      setTimeout(() => {
        toast.success(`Successfully upgraded to ${planName}!`);
        fetchSubscriptionData();
        setUpgrading(false);
      }, 2000);
      
    } catch (error) {
      console.error('Upgrade error:', error);
      toast.error('Upgrade failed. Please try again.');
      setUpgrading(false);
    }
  };

  const handleCancelSubscription = async () => {
    if (!subscription || !user) return;

    try {
      const { error } = await supabase
        .from('user_subscriptions')
        .update({ active: false })
        .eq('user_id', user.id);

      if (error) {
        toast.error('Failed to cancel subscription');
      } else {
        toast.success('Subscription cancelled successfully');
        fetchSubscriptionData();
      }
    } catch (error) {
      toast.error('An error occurred while cancelling');
    }
  };

  const plans = [
    {
      name: 'FREE',
      price: '$0',
      period: '/month',
      tasks: 50,
      icon: Star,
      color: 'text-gray-600',
      features: ['Basic AI models', '3 projects', 'Email support']
    },
    {
      name: 'STARTER',
      price: '$29',
      period: '/month',
      tasks: 500,
      icon: Zap,
      color: 'text-blue-600',
      features: ['All AI models', '50 projects', 'Priority support']
    },
    {
      name: 'PRO',
      price: '$99',
      period: '/month',
      tasks: 5000,
      icon: Crown,
      color: 'text-purple-600',
      features: ['Premium APIs', '500 projects', 'Team collaboration']
    },
    {
      name: 'ENTERPRISE',
      price: 'Custom',
      period: 'pricing',
      tasks: Infinity,
      icon: Building,
      color: 'text-green-600',
      features: ['Unlimited tasks', 'Custom models', 'White-label', 'Dedicated support']
    }
  ];

  const currentPlan = plans.find(p => p.name === subscription?.plan.toUpperCase()) || plans[0];
  const usagePercentage = subscription ? (subscription.tasks_used / subscription.tasks_limit) * 100 : 0;

  if (loading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl">
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <CreditCard className="h-6 w-6 text-primary-foreground" />
            </div>
            Subscription Management
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Plan Overview */}
          {subscription && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <currentPlan.icon className={`h-6 w-6 ${currentPlan.color}`} />
                    Current Plan: {subscription.plan.toUpperCase()}
                  </div>
                  <Badge variant={subscription.active ? "default" : "destructive"}>
                    {subscription.active ? "Active" : "Cancelled"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {subscription.tasks_used}
                    </div>
                    <div className="text-sm text-muted-foreground">Tasks Used</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {subscription.tasks_limit === Infinity ? '∞' : subscription.tasks_limit}
                    </div>
                    <div className="text-sm text-muted-foreground">Tasks Limit</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">
                      {Math.round(usagePercentage)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Usage</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Usage Progress</span>
                    <span>{subscription.tasks_used} / {subscription.tasks_limit}</span>
                  </div>
                  <Progress value={Math.min(usagePercentage, 100)} className="h-3" />
                  {usagePercentage > 80 && (
                    <div className="flex items-center gap-2 text-sm text-orange-600">
                      <AlertTriangle className="h-4 w-4" />
                      You're approaching your usage limit. Consider upgrading.
                    </div>
                  )}
                </div>

                {subscription.billing_cycle_end && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Next billing cycle: {new Date(subscription.billing_cycle_end).toLocaleDateString()}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Available Plans */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Available Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {plans.map((plan) => {
                const isCurrentPlan = plan.name === subscription?.plan.toUpperCase();
                const IconComponent = plan.icon;
                
                return (
                  <Card key={plan.name} className={`relative ${isCurrentPlan ? 'ring-2 ring-primary' : ''}`}>
                    {isCurrentPlan && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Current Plan
                      </div>
                    )}
                    
                    <CardHeader className="text-center">
                      <div className={`mx-auto p-3 rounded-full bg-secondary`}>
                        <IconComponent className={`h-6 w-6 ${plan.color}`} />
                      </div>
                      <CardTitle className="text-lg">{plan.name}</CardTitle>
                      <div className="text-2xl font-bold">
                        {plan.price}
                        <span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold">
                          {plan.tasks === Infinity ? 'Unlimited' : plan.tasks}
                        </div>
                        <div className="text-sm text-muted-foreground">AI tasks per month</div>
                      </div>
                      
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4">
                        {isCurrentPlan ? (
                          <Button variant="outline" className="w-full" disabled>
                            Current Plan
                          </Button>
                        ) : plan.name === 'ENTERPRISE' ? (
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => window.open('mailto:everythingsearchai@gmail.com?subject=Enterprise Plan Inquiry', '_blank')}
                          >
                            Contact Sales
                          </Button>
                        ) : (
                          <Button 
                            className="w-full" 
                            onClick={() => handleUpgrade(plan.name)}
                            disabled={upgrading}
                          >
                            {upgrading ? (
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            ) : (
                              <TrendingUp className="h-4 w-4 mr-2" />
                            )}
                            {subscription?.plan === 'free' ? 'Upgrade' : 'Change Plan'}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Billing History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Billing Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {subscription?.plan === 'free' ? (
                  'You are currently on the free plan. No billing information available.'
                ) : (
                  'Billing history and payment methods would be displayed here. Integration with Stripe/PayPal required.'
                )}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between items-center pt-4 border-t">
            <div>
              {subscription?.plan !== 'free' && subscription?.active && (
                <Button 
                  variant="destructive" 
                  onClick={handleCancelSubscription}
                >
                  Cancel Subscription
                </Button>
              )}
            </div>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
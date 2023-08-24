"use client";

import { apiClient } from "@shared/lib";
import { Button, Icon } from "@ui/components";
import { useRouter } from "next/navigation";

export function CancelSubscriptionButton({
  subscriptionId,
  label,
}: {
  subscriptionId: string;
  label: string;
}) {
  const router = useRouter();
  const cancelSubscriptionMutation =
    apiClient.billing.cancelSubscription.useMutation();

  const cancelSubscription = async () => {
    await cancelSubscriptionMutation.mutateAsync({ subscriptionId });
    router.refresh();
  };

  return (
    <Button variant="outline" onClick={() => cancelSubscription()}>
      <Icon.close className="h-4 w-4" />
      {label}
    </Button>
  );
}

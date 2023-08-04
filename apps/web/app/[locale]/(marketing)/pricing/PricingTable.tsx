"use client";

import { SubscriptionPlan } from "billing/subscriptions";
import { useTranslations } from "next-intl";
import { PricingTable as PricingTablePrimitive } from "ui/marketing";

export function PricingTable({ plans }: { plans: SubscriptionPlan[] }) {
  const t = useTranslations("pricing");
  return (
    <PricingTablePrimitive
      plans={plans}
      onSelectPlan={() => {
        window.location.href = `/settings/billing`;
      }}
      labels={{
        yearly: t("yearly"),
        monthly: t("monthly"),
        subscribe: t("subscribe"),
      }}
    />
  );
}

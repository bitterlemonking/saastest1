"use client";

import { useUser } from "@saas/auth/hooks/use-user";
import { apiClient } from "@shared/lib/api-client";
import { Progress } from "@ui/components/progress";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { OnboardingStep1 } from "./OnboardingStep1";
import { OnboardingStep2 } from "./OnboardingStep2";

export function OnboardingForm() {
  const { updateUser } = useUser();
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalSteps = 2;
  const stepSearchParam = searchParams.get("step");
  const onboardingStep = stepSearchParam ? parseInt(stepSearchParam, 10) : 1;

  const updateUserMutation = apiClient.auth.update.useMutation();

  const setStep = (step: number) => {
    router.replace(`?step=${step}`);
  };

  const onCompleted = async () => {
    await updateUserMutation.mutateAsync({
      onboardingComplete: true,
    });

    updateUser({
      onboardingComplete: true,
    });

    router.replace("/app/dashboard");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold md:text-4xl">
        {t("auth.onboarding.title")}
      </h1>
      <p className="text-muted-foreground mb-6 mt-2">
        {t("auth.onboarding.message")}
      </p>

      <div className="mb-6 flex items-center gap-3">
        <Progress value={(onboardingStep / totalSteps) * 100} className="h-2" />
        <span className="text-muted-foreground shrink-0 text-xs">
          {t("auth.onboarding.step", {
            step: onboardingStep,
            total: totalSteps,
          })}
        </span>
      </div>

      {onboardingStep === 1 && (
        <OnboardingStep1 onCompleted={() => setStep(2)} />
      )}
      {onboardingStep === 2 && (
        <OnboardingStep2 onCompleted={onCompleted} onBack={() => setStep(1)} />
      )}
    </div>
  );
}

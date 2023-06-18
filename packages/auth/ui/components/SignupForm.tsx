"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { Button, Hint, Icon, Input } from "ui";
import { AuthPaths } from "../../types";

const labels = {
  alreadyHaveAccount: "Already have an account?",
  email: "Email",
  passwordHint: "Please enter at least 8 characters.",
  hints: {
    signupFailed: {
      message:
        "We are sorry, but we were unable to create your account. Please try again later.",
      title: "Could not create account",
    },
    verifyEmail: {
      message:
        "We have sent you a link to verify your email. Please check your inbox.",
      title: "Verify your email",
    },
  },
  message:
    "We are happy that you want to join us. Please fill in the form below to create your account.",
  name: "Name",
  password: "Password",
  signIn: "Sign in",
  submit: "Create account",
  title: "Create an account",
};

export function SignupForm({ paths }: { paths: AuthPaths }) {
  // const signUpMutation = trpc.signUp.useMutation();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { isSubmitting, isSubmitted, isSubmitSuccessful, errors },
  } = useForm<{
    email: string;
    password: string;
    name: string;
    serverError?: void;
  }>();

  const onSubmit = (e: FormEvent) => {
    clearErrors("serverError");
    handleSubmit(async () => {
      try {
        // const response = await signUpMutation.mutateAsync({ email, password, name });
        console.log("hey response");
        // await signIn('create-account', {
        //   email,
        //   callbackUrl: config.redirectAfterSignin,
        //   redirect: false,
        // });
      } catch (e) {
        setError("serverError", { type: "invalid" });
      }
    })(e);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">{labels.title}</h1>

      <p className="mb-6 mt-2 text-zinc-500">
        {labels.message} {labels.alreadyHaveAccount}{" "}
        <Link href={paths.signin}>{labels.signIn} &rarr;</Link>
      </p>
      {isSubmitted && isSubmitSuccessful ? (
        <Hint
          status="success"
          title={labels.hints.verifyEmail.title}
          message={labels.hints.verifyEmail.message}
          icon={<Icon.mail className="h-4 w-4" />}
        />
      ) : (
        <form className="flex flex-col items-stretch gap-6" onSubmit={onSubmit}>
          {isSubmitted && errors.serverError && (
            <Hint
              status="error"
              title={labels.hints.signupFailed.title}
              message={labels.hints.signupFailed.message}
              icon={<Icon.error className="h-4 w-4" />}
            />
          )}

          <div>
            <label htmlFor="email" className="mb-1 block font-semibold">
              {labels.name} *
            </label>
            <Input
              status={errors.name ? "error" : "default"}
              type="text"
              {...register("name", { required: true })}
              required
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block font-semibold">
              {labels.email} *
            </label>
            <Input
              status={errors.email ? "error" : "default"}
              type="email"
              {...register("email", { required: true })}
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block font-semibold">
              {labels.password} *
            </label>
            <Input
              status={errors.password ? "error" : "default"}
              type="password"
              {...register("password", { required: true })}
              required
              autoComplete="new-password"
            />
            <small className="italic opacity-50">{labels.passwordHint}</small>
          </div>

          <Button isLoading={isSubmitting}>{labels.submit} &rarr;</Button>
        </form>
      )}
    </div>
  );
}

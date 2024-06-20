"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import createSupabaseClientClient from "@/lib/supabase/client";

export default function OAuthForm() {
    const supabase = createSupabaseClientClient();

    const loginWithGithub = () => {
        supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });
    };

    return (
        <div className="flex flex-col gap-2">
            <Button className="w-full">Login With Apple</Button>
            <Button className="w-full">Login With Google</Button>
            <Button className="w-full" onClick={loginWithGithub}>
                Login With Github
            </Button>
        </div>
    );
}

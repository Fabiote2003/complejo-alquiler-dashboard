"use client";

import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "@/lib/validations/userSchema";
import { signOutAction } from "@/app/actions";

export default function Login() {

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data) => {
  }

  return (
    <form className="flex-1 flex flex-col min-w-64 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-medium">¡Hola Noemi, inicia sesión!</h1>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input placeholder="noemi@gmail.com" {...register('email')} />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Contraseña</Label>
        </div>
        <Input
          type="password"
          placeholder="Ingresa tu contraseña"
          {...register('password')}
          required  
        />
        <SubmitButton pendingText="Iniciando..." className="bg-green-500 hover:bg-green-600 transition-colors">
          Iniciar
        </SubmitButton>
      </div>
    </form>
  );
}

import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">¡Hola Noemi, inicia sesión!</h1>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="noemi@gmail.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Contraseña</Label>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          required
        />
        <SubmitButton pendingText="Iniciando..." formAction={signInAction}>
          Iniciar
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
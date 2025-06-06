import Card_Login from "@/components/login/Card_Login";

export default function Home() {
  const envemail = process.env.email || "";
  const envpassword = process.env.senha || "";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col">
        <Card_Login envemail={envemail} envpassword={envpassword} />
      </main>
     </div>
  );
}

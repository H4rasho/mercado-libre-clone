const CLIENT_ID = "313855756";
const REDIRECT_URL = "https://mercado-libre-clone-two.vercel.app/";

export default function Login() {
  const uuid = crypto.randomUUID();

  const url = `https://auth.mercadopago.com/authorization?client_id=${CLIENT_ID}&response_type=code&platform_id=mp&state=${uuid}&redirect_uri=${REDIRECT_URL}`;

  return (
    <a href={url} className="py-2 px-4">
      Login
    </a>
  );
}

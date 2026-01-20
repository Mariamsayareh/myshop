import { useTranslation } from "react-i18next";
import { createLoginSchema } from "./loginSchema";

function LoginForm() {
  const { t } = useTranslation();
  const schema = createLoginSchema(t);

  // استخدم schema مع formik أو react-hook-form
}

import Alert from "react-bootstrap/Alert";

export default function AlertBanner({
  message,
  variant,
}: {
  message?: string;
  variant?: string;
}) {
  const alertMessage =
    message || "An unexpected error occurred, please try again later.";

  const alertVariant = variant || "danger";

  return (
    <Alert
      role="alert"
      variant={alertVariant}
      style={{ backgroundColor: "red" }}
    >
      {alertMessage}
    </Alert>
  );
}

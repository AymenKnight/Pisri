import { Formik } from 'formik';

interface FormProps {
  initialValues: any;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children: React.ReactNode;
}
export default function Form({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({}) => <>{children}</>}
    </Formik>
  );
}

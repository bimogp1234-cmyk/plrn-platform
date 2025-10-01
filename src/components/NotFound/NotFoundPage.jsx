import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <Container
      maxWidth="md"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <Typography
          variant="h2"
          className="text-6xl font-bold text-indigo-600 dark:text-white"
        >
          404
        </Typography>
        <Typography
          variant="h5"
          className="text-xl text-gray-700 dark:text-gray-300"
        >
          الصفحة غير موجودة
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-600 dark:text-gray-400"
        >
          يبدو أنك وصلت إلى رابط غير صالح أو أن الصفحة لم تعد موجودة.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          className="!bg-indigo-500 hover:!bg-indigo-600 !text-white !px-6 !py-2 !rounded-full !shadow-md"
        >
          العودة إلى الصفحة الرئيسية
        </Button>
      </motion.div>
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack, CheckCircle, School } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stepper,
  Step,
  StepLabel,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { unit0Lessons } from "./Unit0Lessons";
import { unit1Lessons } from "./Unit1Lessons";
import { unit2Lessons } from "./Unit2Lessons";
import { unit3Lessons } from "./Unit3Lessons";

const lessonsMap = {
  0: unit0Lessons,
  1: unit1Lessons,
  2: unit2Lessons,
  3: unit3Lessons,
};

export default function LessonComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, darkMode, unitId, lessonId } = location.state || {};

  const unitNum = Number(unitId ?? 0);
  const lesson = lessonsMap[unitNum] ? lessonsMap[unitNum][lessonId] : null;

  // Auto-start on the main content (Duolingo-like experience)
  const [currentSection, setCurrentSection] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // If lesson is missing, set to 0 so Not Found shows.
    if (!lesson) setCurrentSection(0);
  }, [lesson]);

  if (!lesson) {
    return (
      <div
        className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-green-50"}`}
      >
        <div className="p-6">
          <Card>
            <CardContent className="text-center">
              <Typography variant="h5" color="error">
                الدرس غير موجود
              </Typography>
              <Box mt={3}>
                <Button variant="contained" onClick={() => navigate(-1)}>
                  العودة
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const steps = ["المحتوى", "التطبيق"];

  const handleNext = () => {
    if (currentSection < steps.length) {
      setCurrentSection((s) => s + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    setCurrentSection((s) => Math.max(1, s - 1));
  };

  const renderContentBlock = (block, idx) => {
    if (!block) return null;
    switch (block.type) {
      case "text":
        return (
          <div key={idx} className="mb-4">
            <Typography variant="h6" className="text-green-600 mb-2">
              {block.title}
            </Typography>
            <Typography style={{ whiteSpace: "pre-line" }}>
              {block.content}
            </Typography>
          </div>
        );
      case "list":
        return (
          <div key={idx} className="mb-4">
            <Typography variant="h6" className="text-green-600 mb-2">
              {block.title}
            </Typography>
            <List>
              {block.items.map((it, i) => (
                <ListItem key={i}>
                  <ListItemText primary={it} />
                </ListItem>
              ))}
            </List>
          </div>
        );
      case "definition":
        return (
          <div key={idx} className="mb-4">
            <Typography variant="h6" className="text-green-600 mb-2">
              {block.title}
            </Typography>
            {block.items.map((it, i) => (
              <div key={i} className="mb-2">
                <Typography fontWeight="bold">{it.term}</Typography>
                <Typography>{it.definition}</Typography>
              </div>
            ))}
          </div>
        );
      case "example":
      case "comparison":
        return (
          <pre
            key={idx}
            className="bg-gray-100 p-3 rounded mb-4 whitespace-pre-wrap"
          >
            {block.content}
          </pre>
        );
      case "code":
        return (
          <pre
            key={idx}
            className="bg-gray-900 text-white p-3 rounded mb-4 font-mono whitespace-pre-wrap"
          >
            {block.content}
          </pre>
        );
      default:
        return (
          <div key={idx} className="mb-4">
            <pre className="whitespace-pre-wrap">{JSON.stringify(block)}</pre>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-green-50"}`}>
      <div className={`p-4 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate(-1)}
            variant="outlined"
          >
            العودة
          </Button>

          <Box display="flex" alignItems="center">
            <School color="primary" />
            <Typography variant="h6" className="mr-2">
              الوحدة {lesson.unitId + 1} - {lesson.title}
            </Typography>
          </Box>

          {isCompleted && (
            <Chip
              icon={<CheckCircle />}
              label="مكتمل"
              color="success"
              variant="outlined"
            />
          )}
        </Box>
      </div>

      <Box p={2}>
        <Stepper activeStep={currentSection - 1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box p={3} className="max-w-4xl mx-auto">
        <Card>
          <CardContent>
            {currentSection === 1 && (
              <div>
                {lesson.content.map((block, idx) =>
                  renderContentBlock(block, idx)
                )}
              </div>
            )}

            {currentSection === 2 && (
              <div>
                {/* Activities were removed by design; show a creative call-to-action */}
                <Box className="p-4 rounded bg-yellow-50">
                  <Typography variant="h6" className="text-yellow-700 mb-2">
                    التطبيق التفاعلي
                  </Typography>
                  <Typography>
                    لقد صممنا هذا القسم ليكون تفاعلياً ومُحفّزاً—جرب التحديات
                    الصغيرة، وأكمل المهام لتحصل على نقاط ومكافآت!
                  </Typography>
                </Box>
              </div>
            )}

            {/* Footer controls */}
            <Box mt={4} display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                onClick={handleBack}
                disabled={currentSection <= 1}
              >
                السابق
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  if (currentSection < steps.length) handleNext();
                  else setIsCompleted(true);
                }}
              >
                {currentSection === steps.length ? "إنهاء الدرس" : "التالي"}
              </Button>
            </Box>

            {isCompleted && (
              <Box
                mt={4}
                p={4}
                className="bg-gradient-to-br from-green-400 to-teal-600 text-white rounded-lg text-center"
              >
                <Typography variant="h5" className="font-extrabold">
                  تهانينا! 🎉
                </Typography>
                <Typography className="mt-2">
                  لقد أنهيت هذا الدرس بنجاح وحصلت على نقاط التقدم.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

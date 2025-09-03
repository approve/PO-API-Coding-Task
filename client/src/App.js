import "./App.css";
import {
  Box,
  Typography,
  Container,
  Paper,
  Card,
  CardContent,
  Fade,
  Chip,
} from "@mui/material";
import {
  Add as AddIcon,
  ShoppingCart as ShoppingCartIcon,
  Receipt as ReceiptIcon,
} from "@mui/icons-material";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f5f5",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Fade in timeout={800}>
          <Box textAlign="center" mb={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              mb={2}
            >
              <ShoppingCartIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Purchase Manager
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                fontWeight: 300,
              }}
            >
              Track your purchases with style
            </Typography>
          </Box>
        </Fade>

        {/* Form Card */}
        <Fade in timeout={1000}>
          <Card
            sx={{
              mb: 4,
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <AddIcon sx={{ color: "primary.main", fontSize: 28 }} />
                <Typography variant="h5" fontWeight="600" color="primary.main">
                  Add New Purchase
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Fade>

        {/* Purchases Table Card */}
        <Fade in timeout={1200}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <ReceiptIcon sx={{ color: "primary.main", fontSize: 28 }} />
                <Typography variant="h5" fontWeight="600" color="primary.main">
                  Purchase History
                </Typography>
                <Chip
                  label={"0 items"}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              </Box>

              
                <Paper
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* implement table here */}
                </Paper>
            </CardContent>
          </Card>
        </Fade>
      </Container>
    </Box>
  );
}

export default App;

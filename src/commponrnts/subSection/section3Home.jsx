import { Box, Typography ,Button ,Grid} from '@mui/material';
import braceletImg from "../../img/cms.webp";
import ringImg from "../../img/cme1.webp";




const Section3Home = () => {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        p: 6,
        backgroundColor: "background.paper",
      }}
    >
      {/* Item 1 */}
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          alignItems="center"
          gap={3}
          sx={{backgroundColor: "background.default"}}
          p={2}
        >
          {/* Text */}
          <Box sx={{backgroundColor: "background.default"}}>
            <Typography variant="caption" letterSpacing={1}>
              DIAMOND RING
            </Typography>

            <Typography fontSize={22} fontWeight={600} my={1}>
              Yellow Gold & Diamond Ring
            </Typography>

            <Button
              variant="contained"
              sx={{
                px: 4,
                backgroundColor: "#CE967E",
                "&:hover": { backgroundColor: "#000" },
                color: "#fff",
              }}
            >
              shop now
            </Button>
          </Box>

          {/* Image */}
          <Box
            component="img"
            src={ringImg}
            alt="Diamond Ring"
            sx={{
              width: 280,
              height: 280,
              objectFit: "cover",
              objectPosition: "right center",
              cursor: "pointer",
              transition: "transform .6s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
      </Grid>

      {/* Item 2 */}
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          alignItems="center"
          gap={3}
          sx={{backgroundColor: "background.default"}}
          p={2}
        >
          {/* Text */}
          <Box>
            <Typography variant="caption" letterSpacing={1}>
              DIAMOND RING
            </Typography>

            <Typography fontSize={22} fontWeight={600} my={1}>
              Yellow Gold & Diamond Ring
            </Typography>

            <Button
              variant="contained"
              sx={{
                px: 4,
                backgroundColor: "#CE967E",
                "&:hover": { backgroundColor: "#000" },
                color: "#fff",
              }}
            >
              shop now
            </Button>
          </Box>

          {/* Image */}
          <Box
            component="img"
            src={braceletImg}
            alt="Diamond Ring"
            sx={{
              width: 280,
              height: 280,
              objectFit: "cover",
              objectPosition: "right center",
              cursor: "pointer",
              transition: "transform .6s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Section3Home;
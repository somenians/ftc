import React from "react";
import { Typography, Button, Box, Container, Grid, Stack} from "@mui/material";
import "./style.css";
export const About = () => {
    return (
		<div>
			<section className="about" id="about">
				<Grid container rowSpacing={4}>
                    <Stack direction="row">
                        <Grid
                            xs={4}
                            sx={{
                                textAlign: "center",
                                marginTop: 15,
                                marginLeft: 15,
                            }}
                        >
                            <Typography
                                fontSize={30}
                                fontWeight="bold"
                                sx={{ fontFamily: "Poppins, sans-serif" }}
                                marginBottom={5}
                            >
                                About
                            </Typography>
                            <Typography
                                fontSize={20}
                                fontWeight="500"
                                sx={{
                                    flexGrow: 1,
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                We are a devout religious group aiming to appease
                                our lord and savior Siddhant Patel
                            </Typography>
                        </Grid>
                        <Grid xs={8} sx={{ textAlign: "center" }}>
                            <Box
                                width={800}
                                component="img"
                                alt="ftc"
                                src={require("../assets/ftc.png")}
                            />
                        </Grid>
                    </Stack>
				</Grid>
			</section>
			<section className="mission" id="mission">
				<Grid container rowSpacing={2}>
					<Grid
						xs={4}
						sx={{ textAlign: "center", marginTop: 15 }}
					></Grid>
					<Grid xs={4} sx={{ textAlign: "center", marginTop: 15 }}>
						<Typography
							fontSize={30}
							fontWeight="bold"
							sx={{ fontFamily: "Poppins, sans-serif" }}
							marginBottom={5}
						>
							Mission Statement
						</Typography>
						<Typography
							fontSize={20}
							fontWeight="500"
							sx={{
								flexGrow: 1,
								fontFamily: "Poppins, sans-serif",
							}}
						>
							The robotics club is one of our school's STEM club
							and aims to offer students skills, confidence, and
							experience in the ever growing field of STEM. Our
							clubs main focus at the moment is participating in
							the FIRST Tech Challenge, a competition where
							students design, build, program, and operate robots
							to compete in a head-to-head challenge. However, we
							have plans to start hosting workshops that will
							teach students the basics of CAD, programming, and
							robotics parts.
						</Typography>
					</Grid>
					<Grid
						xs={4}
						sx={{ textAlign: "center", marginTop: 15 }}
					></Grid>
				</Grid>
			</section>
		</div>
	);
}
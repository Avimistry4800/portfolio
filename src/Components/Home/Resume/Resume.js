import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import PersonIcon from "@material-ui/icons/Person";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import StorageIcon from "@material-ui/icons/Storage";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "6px 16px",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Resume = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const classes = useStyles();
    return (
        <section className="container  py-5">
            <h1 className="text-center py-5">A summary of My Resume</h1>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                        ></Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <PersonIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper
                            data-aos="fade-left"
                            elevation={3}
                            className={classes.paper}
                        >
                            <Typography variant="h6" component="h1">
                                About
                            </Typography>
                            <Typography>
                                I am being a JavaScript & react Developer with
                                Programming Hero team. I have advanced knowledge
                                of Full-Stack-Development.
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                        ></Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper
                            data-aos="fade-right"
                            elevation={3}
                            className={classes.paper}
                        >
                            <Typography variant="h6" component="h1">
                                Front-End Development
                            </Typography>
                            <Typography>
                                HTML/CSS, JavaScript for static sites, React.js,
                                Redux, React-Native, Firebase for reactive sites, Material
                                UI, Semantic UI, Bootstrap as CSS Framework
                                Constantly Learning New Technology.
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <StorageIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper
                            data-aos="fade-left"
                            elevation={3}
                            className={classes.paper}
                        >
                            <Typography variant="h6" component="h1">
                                Back-End Development
                            </Typography>
                            <Typography>
                                Node.js & Express powered SSR web apps JWT, Best
                                security practices, Firebase Admin Tools like
                                Ejs, Pug, Validator, Dom-Purify, Sanitizer and
                                more Constantly Learning New Technology
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <MenuBookIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper
                            data-aos="fade-right"
                            elevation={3}
                            className={classes.paper}
                        >
                            <Typography variant="h6" component="h1">
                                Education
                            </Typography>
                            <Typography variant="h5" component="h1">
                                Gono bishwabidyalay
                            </Typography>
                            <Typography>
                                Dpt. of Computer Science & engineering.
                                (Running)
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <div className="d-flex justify-content-center py-5">
                <a href="https://drive.google.com/uc?export=download&id=1WmAH_Zr1WURjTL6ZVq_h3FtPYILXwITI">
                    {" "}
                    <Button data-aos="fade-up" variant="outline-success btn-sm">
                        Download Resume
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default Resume;

import people from "./people"
import orgs from "./orgs"
import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const news = [
    {
        date: "May 01, 2021",
        content: <>I joined {orgs.ucsc.anchor} as a part time Research Assistant to work on predicting the solid waste generation in Sri Lanka. This project is supervised by <OutboundLink className="link" href={people.noelfernando.link} target="_blank" rel="noopener noreferrer">{people.noelfernando.namewithhonorifics}</OutboundLink>.</>
    },
    {
        date: "Sep 29, 2020",
        content: <>I joined {orgs.score.anchor} to work on a research to find ways to match internet domain entities using ML techniques with <OutboundLink className="link" href={people.mohammadnabeel.link} target="_blank" rel="noopener noreferrer">{people.mohammadnabeel.namewithhonorifics}</OutboundLink> @{orgs.qcri.anchor}.</>
    },
    {
        date: "Jul 01, 2018",
        content: <>I joined {orgs.ucsc.anchor} as a full-time Research Intern to work under the topic 'Machine Learning over Encrypted Data'. I will be supervised by <OutboundLink className="link" href={people.nalinranasinghe.link} target="_blank" rel="noopener noreferrer">{people.nalinranasinghe.namewithhonorifics}</OutboundLink>.</>
    },
    {
        date: "Jan 18, 2018",
        content: <>I started working part-time on developing an OCR solution for Sinhala language using Tesseract OCR Engine in collaboration with <OutboundLink className="link" href={people.leoniesolomons.link} target="_blank" rel="noopener noreferrer">{people.leoniesolomons.namewithhonorifics}</OutboundLink>.</>
    },
    {
        date: "Feb 05, 2016",
        content: <>I joined the R&D team at {orgs.dreamteam.anchor} until I start my bachelors at {orgs.ucsc.anchor}.</>
    },
    {
        date: "Jan 23, 2016",
        content: <>I joined the instructor team at {orgs.dreamteam.anchor} and started conducting my own class on introductory robotics.</>
    },
    {
        date: "Nov 01, 2021",
        content: <>I got promoted to the Senior Data Science Engineer role.</>
    },
    {
        date: "Apr 01, 2021",
        content: <>I switched to the new data science team as a Data Science Engineer.</>
    },
    {
        date: "Mar 02, 2020",
        content: <>I joined {orgs.wso2.anchor} IAM team as a full-time Software Engineer.</>
    },
    {
        date: "Apr 23, 2018",
        content: <>I got selected as for the GSoC 2018 under {orgs.cernhsf.anchor}|{orgs.owncloud.anchor}|{orgs.aarnet.anchor} to carry out the project <OutboundLink className="link" href="https://summerofcode.withgoogle.com/archive/2018/projects/5334913901395968" target="_blank" rel="noopener noreferrer">Petabyte-Scale Cloud Storage File Manager</OutboundLink>.</>
    },
]

export default news

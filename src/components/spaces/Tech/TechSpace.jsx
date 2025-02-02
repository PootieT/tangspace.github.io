import React, { Component } from 'react'
import { Jumbotron, Row, Image } from 'react-bootstrap';
import Project from './Project'
import '../Spaces.css'

export default class TechSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/tech-header.jpg" circle className="contained-image"/>
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Tech</h1>
          </Row>
          <Row className="justify-content-md-center">
            <p>I build things, and sometimes they are cool and useful.</p>
          </Row>
          <Row className="justify-content-md-center">
            <Project
              name="Metropolis Sentence Interpolation"
              image="assets/project-metropolis.png"
              description="Using metropolis algorithm to sample interpolations of two sentences"
              link="/metropolis">
              <a href="https://github.com/PootieT/Metropolis-Hasting-Sentence-Sampling" className="obvious-link">Code</a>
              {"\n"}
              <a href="https://github.com/PootieT/Metropolis-Hasting-Sentence-Sampling/blob/main/Metropolis_Hasting_Based_Sentence_Interpolation__a_Mixup_in_Natural_Language.pdf" className="obvious-link">Report</a>    
            </Project>
            <Project
              name="DJ MoveMixx"
              image="assets/project-dj-move-mixx.jpg"
              description="A microcontroller-enabled glove that is hooked up to Mixx
                MIDI input to DJ music in real time"
              link="/djmovemixx">
              <a href="https://www.youtube.com/watch?v=BR7X9gsRT9E" className="obvious-link">Video Demo</a>
              {"\n"}
              <a href="https://www.youtube.com/watch?v=pR4h8jHmgWU" className="obvious-link">Demo Blooper</a>    
            </Project>
            <Project
              name="Swollen"
              image="assets/project-swollen.png"
              description="An Android app to collect workout data for downstream analysis"
              link="/swollen">
              <a href="https://play.google.com/store/apps/details?id=com.fitnessmobile" className="obvious-link">Google Playstore</a>
              {"\n"}
              <a href="https://github.com/PootieT/fitness_progression_modeling/tree/master/fitnessMobile" className="obvious-link">Git Repo</a>    
            </Project>
            <Project
              name="DiaBeatDis"
              image="assets/project-diabeatdis.png"
              description="A continuous glucose monitoring solution for low resource setting"
              link="/diabeatdis">
              <a href="https://www.youtube.com/watch?v=7kubvq1IroY" className="obvious-link">Project Video</a>
              {"\n"}
              <a href="https://github.com/PootieT/DiaBeatDis_android" className="obvious-link">Git Repo</a>    
            </Project>
          </Row>
          <Row className="justify-content-md-center">
            <Project
              name="MinDirect"
              image="assets/project-mindirect.png"
              description="A 3D printed Brain-Machine-Interface device that controls movement of a ball through EEG signal"
              link="/mindirect"> 
            </Project>
            <Project
              name="HadCaffeine?"
              image="assets/project-caffeine.jpg"
              description="A collaboration study with NeuroLex Labs to classify caffeine consumption through voice"
              link="/caffeine">
              <a href="https://www.neurolex.ai/" className="obvious-link">NeruoLex</a>
            </Project>
            <Project
              name="Liquid Biopsy"
              image="assets/project-liquid-biopsy.png"
              description="A prototype solution to diagnose pancreatic cancer through microfluidic videos analytics"
              link="/liquidbiopsy">
            </Project>
          </Row>
          <Row className="justify-content-md-center">
            <Project
              name="Vibez"
              image="assets/project-vibez.png"
              description="A automatic video analysis (semantics and keywords) webapp (1st place HackRice 2016)"
              link="/vibez"> 
              <a href="https://github.com/zhangty96/Vibez" className="obvious-link">Github</a>
              {"\n"}
              <a href="https://devpost.com/software/vibez-kzfvd5" className="obvious-link">DevPost</a>  
            </Project>
            <Project
              name="Auto-Smash"
              image="assets/project-auto-smash.png"
              description="A script that helps me play whack-a-mole in Messenger (to beat my friends' score)"
              link="/smash"> 
              <a href="https://github.com/PootieT/facebook-game-automator" className="obvious-link">Github</a>  
            </Project>
          </Row>
        </Jumbotron>       
      </div>
    )
  }
}
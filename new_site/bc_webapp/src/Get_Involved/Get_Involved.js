import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Get_Involved.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Join us on Slack', 'Start Coding on community projects', 'Build your portfolio'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Suspendisse ultrices gravida dictum fusce ut placerat. Amet nisl purus in mollis nunc. Et pharetra pharetra massa massa ultricies. Id interdum velit laoreet id donec ultrices. Risus feugiat in ante metus dictum at tempor. Nibh sed pulvinar proin gravida. Lorem donec massa sapien faucibus et molestie ac feugiat. Bibendum at varius vel pharetra vel turpis nunc. ornare lectus sit amet est placerat in. Vitae ultricies leo integer malesuada. Mauris rhoncus aenean vel elit scelerisque. Donec et odio pellentesque diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Non quam lacus suspendisse faucibus. Pharetra magna ac placerat vestibulum lectus. Non nisi est sit amet facilisis magna etiam. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Nisl vel pretium lectus quam id. Mauris sit amet massa vitae tortor condimentum. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Aliquam vestibulum morbi blandit cursus. Nullam ac tortor vitae purus. Turpis massa sed elementum tempus egestas sed sed. Amet aliquam id diam maecenas ultricies mi eget mauris. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Tellus at urna condimentum mattis pellentesque id.';
    case 1:
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Suspendisse ultrices gravida dictum fusce ut placerat. Amet nisl purus in mollis nunc. Et pharetra pharetra massa massa ultricies. Id interdum velit laoreet id donec ultrices. Risus feugiat in ante metus dictum at tempor. Nibh sed pulvinar proin gravida. Lorem donec massa sapien faucibus et molestie ac feugiat. Bibendum at varius vel pharetra vel turpis nunc. ornare lectus sit amet est placerat in. Vitae ultricies leo integer malesuada. Mauris rhoncus aenean vel elit scelerisque. Donec et odio pellentesque diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Non quam lacus suspendisse faucibus. Pharetra magna ac placerat vestibulum lectus. Non nisi est sit amet facilisis magna etiam. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Nisl vel pretium lectus quam id. Mauris sit amet massa vitae tortor condimentum. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Aliquam vestibulum morbi blandit cursus. Nullam ac tortor vitae purus. Turpis massa sed elementum tempus egestas sed sed. Amet aliquam id diam maecenas ultricies mi eget mauris. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Tellus at urna condimentum mattis pellentesque id. asfkasldlfkjas;kdfjlk aslkdfjlaksdjf;lkasj jdsalfkjsdkjfkdjfkwje werjwerkljwer w erlkwejrlkj werlkjwelrkj werlkjwelrkj';
    case 2:
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Suspendisse ultrices gravida dictum fusce ut placerat. Amet nisl purus in mollis nunc. Et pharetra pharetra massa massa ultricies. Id interdum velit laoreet id donec ultrices. Risus feugiat in ante metus dictum at tempor. Nibh sed pulvinar proin gravida. Lorem donec massa sapien faucibus et molestie ac feugiat. Bibendum at varius vel pharetra vel turpis nunc. ornare lectus sit amet est placerat in. Vitae ultricies leo integer malesuada. Mauris rhoncus aenean vel elit scelerisque. Donec et odio pellentesque diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Non quam lacus suspendisse faucibus. Pharetra magna ac placerat vestibulum lectus. Non nisi est sit amet facilisis magna etiam. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Nisl vel pretium lectus quam id. Mauris sit amet massa vitae tortor condimentum. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Aliquam vestibulum morbi blandit cursus. Nullam ac tortor vitae purus. Turpis massa sed elementum tempus egestas sed sed. Amet aliquam id diam maecenas ultricies mi eget mauris. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Tellusasdfasdf  asdflkjasdlfkj asdflkjasdflkj asdfklajsdflkjasdf asdlfkjasdlfkj asdlfkjasdlfkj asdlfkjasdflkj asldkfjlvkmalsdmclkasdfs adlfkjasdlkfj asdflkjasldkj  lkjasdf asldkfj at urna condimentum mattis pellentesque id.';
    default:
      return 'Unknown step';
  }
}
const GetInvolved = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div>


    <div className="flow-container">
        {/* Join Slack Section */}
        <div>
            <a href="http://slack.bootcamperscollective.com" rel="noopener noreferrer" target="_blank">
            <img className="coding-image" src={require("../Assets/slack.png")} alt='slack'/>
            </a>
        </div>
        <div>
            <a href="https://github.com/bootcamperscollective" rel="noopener noreferrer" target="_blank"> 
            <img className="coding-image" src={require("../Assets/coding.png")} alt='coding'/>
            </a>
        </div>
        {/* Build Your Portfolio Section */}
        <div>
            <img className="coding-image"src={require("../Assets/experience.png")} alt='experience' />
        </div>
    </div>


    <div className={classes.root}>
      <Stepper className="stepper" nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className="MuiTypography-body1">
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default GetInvolved;
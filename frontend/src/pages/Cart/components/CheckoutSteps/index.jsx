import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import "./index.css";

const CheckoutSteps = ({ activeStep }) => {

    const steps = [
        {
            label: <Typography> Shipping Details </Typography>,
            icon: <LocalShippingIcon />
        },
        {
            label: <Typography> Confirm Order </Typography>,
            icon: <LibraryAddCheckIcon />
        },
        {
            label: <Typography> Payment </Typography>,
            icon: <CreditCardIcon />
        }
    ]

    const stepStyles = {
        boxSizing: "border-box"
    }

    return (
        <>
            <div className='container'>

                <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>

                    {
                        steps.map((item, index) => (
                            <Step key={index} active={activeStep === index ? true : false}
                                completed={activeStep >= index ? true : false}>

                                <StepLabel style={{ color: activeStep >= index ? "#9ca6c8" : "#000" }}
                                    icon={item.icon}> {item.label} </StepLabel>

                            </Step>
                        ))
                    }

                </Stepper>

            </div>
        </>
    )
}

export default CheckoutSteps;
import { Grid } from "@mui/material"
import Heading from "./components/Heading"

type UserProps = {
    firstName: string
}

const RegisterCardForm = (props: UserProps) => {

    return (
        <>
            <Grid container
                spacing={2}
                justifyContent="center"
                alignItems="center">
                <Heading>{`Welcome ${props.firstName}`}</Heading>
            </Grid>
            <Grid container
                spacing={2}
                justifyContent="center"
                alignItems="center">
            </Grid>
        </>
    )
}

export default RegisterCardForm
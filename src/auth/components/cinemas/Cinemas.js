import { Add, Movie } from "@material-ui/icons"

const { Card, CardHeader, CardContent, IconButton } = require("@material-ui/core")

const Cinemas =()=>{
    return(
        <Card>
            <CardHeader
            avatar={<Movie/>}
            title={'Cinemas'}
            action={
                <IconButton>
                    <Add/>
                </IconButton>
            }
            />
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default Cinemas
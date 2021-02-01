import { Card, CardContent, CardHeader } from "@material-ui/core"
import { Category } from "@material-ui/icons"

const ShowAll =()=>{
    return(
        <Card>
            <CardHeader
            title={'All categories'}
            avatar={<Category/>}/>
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default ShowAll
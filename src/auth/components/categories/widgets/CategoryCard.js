import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from "@material-ui/core"
import CategoryStyles from '../styles/CategoryStyles'
import {openDialog} from '../../../state/AppAction'
import {useDispatch} from 'react-redux'
import { API_URL } from "../../../../constants/constants"
import AppForm from "../../../forms/AppForm"
const CategoryCard =(props)=>{
    const category = props.category
    const classes = CategoryStyles()
    const dispatch = useDispatch()

    const addCategory =(category)=>{

        const newCategoryInput = [
            {
                'name':'parent_id',
                'label':'parent id',
                'type':'text',
                'visibility':false,
                'value':category.id,
                'required':false,
                'errorMessage':'please enter category name'
            },
            {
                'name':'name',
                'label':'Enter category name',
                'type':'text',
                'required':true,
                'errorMessage':'please enter category name'
            },
            {
                'name':'description',
                'label':'Description of your category',
                'type':'text',
                'required':true,
                'errorMessage':'please enter discription of your category'
            }
        ]

        const info ={
            btnLabel:'Add category',
            path:`${API_URL}category`
        }
        const showData ={
            'show':true,
            'title':`Add new category for ${category.name}`,
            'page':<AppForm form={newCategoryInput} info={info} />
        }

        dispatch(openDialog(showData))
    }
    return(
         <Card>
            <CardHeader
                title={category.name}
                avatar={
                    <Avatar>
                    {category.name.charAt(0)}
                </Avatar>
            }
            subheader={'120 products'}
            />
            <CardContent>
                <Typography>
                    {`${category.child.length}: categories`}
                </Typography>
                <Typography>
                    {`120: request`}
                </Typography>
                <Typography>
                    {`125 sells`}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Button 
                onClick={()=>addCategory(category)}
                className={classes.buttons}
                color={'primary'} 
                variant={'outlined'}>
                    add new category
                </Button>
            </CardActions>                                                                          
        </Card>
    )
}

export default CategoryCard
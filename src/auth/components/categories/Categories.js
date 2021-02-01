import { Card, CardHeader, CardContent, IconButton, Divider, Grid, Avatar, CardActions, Button, Typography } from "@material-ui/core"
import { Add, Category } from "@material-ui/icons"
import AppForm from '../../forms/AppForm'
import {AddNewCategory} from './forms/AddNewCategory'
import {openDialog} from '../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import {API_URL} from '../../../constants/constants'
import {index} from '../../state/AppAction'
import {useEffect} from 'react'
import CardLoading from "../../loading/CardLoading"
import { FETCH_CATEGORY } from "../../state/Constants"
import CategoryStyles from './styles/CategoryStyles'
import CategoryCard from "./widgets/CategoryCard"
import { Skeleton } from "@material-ui/lab"
import { grey } from "@material-ui/core/colors"
import { Link } from "react-router-dom"
const Categories =()=>{
    const classes = CategoryStyles()
    const dispatch = useDispatch()
    const loading =useSelector(state=>state.authReducer.categoryReducer.loading);
    const category = useSelector(state=>state.authReducer.categoryReducer.categories)

    useEffect(()=>{
        dispatch(index(`${API_URL}category`,FETCH_CATEGORY))
    },[])
    const addCategory =(id)=>{
        console.log(id)
        const info ={
            btnLabel:'Add category',
            path:`${API_URL}category`
        }
        const newCategoryInput = [
            {
                'name':'parent_id',
                'label':'parent id',
                'type':'text',
                'visibility':false,
                'value':id,
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
        const showData ={
            'show':true,
            'title':'Add new category',
            'page':<AppForm form={newCategoryInput} info={info} />
        }

        dispatch(openDialog(showData))
    }

    return(
        <Card>
            <CardHeader
            title={'Categories'}
            avatar={
                <Category/>
            }
            action={
                <IconButton onClick={()=>addCategory(0)}>
                    <Add/>
                </IconButton>
            }/>
            <Divider/>
            <CardContent>
                {
                    loading
                    ?
                        (<CardLoading/>)
                    :
                        (
                            <div>
                                {
                                    category.data.length>0
                                    ?
                                        (
                                            <Grid container spacing={2}>
                                                {
                                                    category.data.map(category=>(
                                                        <Grid item md={3} xs={12} sm={12}>
                                                            <CategoryCard category={category}/>
                                                        </Grid>
                                                    ))
                                                }
                                            </Grid>
                                        )
                                    :
                                        (
                                            <div className={classes.noCategory}>
                                                <Typography color={'secondary'} style={{marginBottom:25}}>
                                                    There is no registered category until now. Start registering your category ):
                                                </Typography>
                                                <Button 
                                                onClick={()=>addCategory(0)}
                                                className={classes.buttons}
                                                color={'primary'}
                                                variant={'outlined'}>
                                                    Add category
                                                </Button>
                                            </div>
                                        )
                                }
                            </div>
                        )
                }
            </CardContent>
            <CardActions className={classes.cardAction}>
                {
                    loading
                    ?
                        (
                            <Skeleton
                             width={100}
                             height={200}
                             style={{backgroundColor:grey[500]}}
                            />
                        )
                    :
                        (
                            <div>
                                {
                                    category.data.length>0
                                    ?
                                        (
                                            <Button
                                            component={Link}
                                            to={'/auth/admin/allCategories'}
                                            color={'secondary'}
                                            variant={'text'}
                                            className={classes.buttons}>
                                                show all
                                            </Button>
                                        )
                                    :(null)
                                }
                            </div>
                        )
                }
            </CardActions>
        </Card>
    )
}

export default Categories
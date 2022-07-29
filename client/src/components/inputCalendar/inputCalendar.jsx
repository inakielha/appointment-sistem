// import {Dialog, DialogTitle} from "@material-ui/core";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';






export default function InputCalendar(props){
    function handleClouse (){
        props.onClose(false)
    }
    return (
        <div>
            <Dialog open = {props.open} onClose={handleClouse}>
                <DialogTitle>Save Revenue</DialogTitle>
                <DialogContent>
                    <form >
                        <TextField label="Customer" fullWidth={true}/>
                        <TextField label="Amount" fullWidth={true}/>
                        <DialogActions>
                            <Button onClick={handleClouse}>Close</Button>
                            <Button type='submit'>Save</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

        </div>
    )
}
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../../../redux/actions';

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const user = useSelector((state)=>state.user)
    let emails = [user.userEmail]
    
    const handleClose = () => {
        onClose(selectedValue);
    };
    
    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{props.title}</DialogTitle>
            <List sx={{ pt: 0 }}>
                {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                <EmailOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                    </ListItem>
                ))}
                {user.userName && 
                <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.userName} />
                </ListItem>
                }
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
    const user = useSelector((state)=>state.user)
    let emails = [user.userEmail]
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails);
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        props.setDialogOpen(false);
        setSelectedValue(value);
    };
    React.useEffect(() => {
        dispatch(getUserById(props.data))
    }, [])

    return (
        <div>
            <SimpleDialog
                selectedValue={selectedValue}
                open={props.dialogOpen}
                onClose={handleClose}
                title = {props.title}
            />
        </div>
    );
}

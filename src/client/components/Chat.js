//dependencies
import { Component } from "react";
import { connect } from "react-redux";

//import PAGE_SIZE from "../const/pageSize";

// material ui
import Paper from "material-ui/Paper";
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableHeader, TableBody, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";

// action
import {
    handleGetMessagesList,
    handlePostMessage
} from "../actions/messagesActions";


//State Selectors
import {
    getMessagesList,
    getMessagesLoadErrorMessage,
    getPostMessageErrorMessage,
    getIsMessagesLoading,
    getIsMessagePosting,
    getLoggedUserInfo,
    getOtherUsersInfo
} from "../reducers";

class Chat extends Component {

    // componentDidMount() {
    //     if (this.props.initialListLoaded === false) {
    //         this.props.handleLoadInitialUsersList();
    //     }
    // }

    // onLoadMoreUsersButtonClick() {
    //     this.props.handleLoadMoreUsers(this.props.loadedUsersCount, PAGE_SIZE);
    // }

    // onAddNewUserButtonClick() {
    //     this.props.history.push("/addUser");
    // }

    render() {
        // const style = {
        //     paper: {
        //         borderRadius: 50,
        //         width: "90%",
        //         textAlign: "center",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "space-around",
        //         marginLeft: "5%"
        //     },
        //     card: {
        //         margin: 50
        //     },
        //     header: {
        //         fontWeight: "bold",
        //         fontSize: 18
        //     },
        //     tableHeader: {
        //         background: "#f1ebeb"
        //     },
        //     tableHeaderColumn: {
        //         fontSize: 18,
        //         color: "black",
        //         fontWeight: "bold"
        //     },
        //     errorLabel: {
        //         fontWeight: "bold",
        //         fontSize: 16,
        //         color: "red"
        //     },
        //     centeredDiv: {
        //         margin: "auto"
        //     },
        //     addNewButton: {
        //         float: "right"
        //     }
        // }


        // return <Paper zDepth={5} style={style.paper}>
        //     <Card style={style.card}>
        //         <CardHeader>
        //             <div style={style.centeredDiv}>
        //                 <label style={style.header}>Users List</label>
        //                 {
        //                     this.props.isInitialLoading === false && this.props.initialLoadErrorMessage === "" &&
        //                     <RaisedButton id="btnAddNew" primary={true} label="Add new" style={style.addNewButton} onClick={this.onAddNewUserButtonClick.bind(this)} />
        //                 }
        //             </div>

        //         </CardHeader>
        //         <CardText>
        //             {
        //                 this.props.isInitialLoading === false && this.props.initialLoadErrorMessage === "" && <div>
        //                     <Table>
        //                         <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={style.tableHeader}>
        //                             <TableRow>
        //                                 <TableHeaderColumn>
        //                                     First Name
        //                 </TableHeaderColumn>
        //                                 <TableHeaderColumn>
        //                                     Last Name
        //                 </TableHeaderColumn>
        //                                 <TableHeaderColumn>
        //                                     Email
        //                 </TableHeaderColumn>
        //                                 <TableHeaderColumn>
        //                                     Description
        //                 </TableHeaderColumn>
        //                             </TableRow>

        //                         </TableHeader>
        //                         <TableBody displayRowCheckbox={false}>
        //                             {
        //                                 this.props.usersList.map(({ first_name, last_name, email, description }) => <TableRow key={email}>
        //                                     <TableRowColumn>
        //                                         {first_name}
        //                                     </TableRowColumn>
        //                                     <TableRowColumn>
        //                                         {last_name}
        //                                     </TableRowColumn>
        //                                     <TableRowColumn>
        //                                         {email}
        //                                     </TableRowColumn>
        //                                     <TableRowColumn>
        //                                         {description}
        //                                     </TableRowColumn>
        //                                 </TableRow>)
        //                             }
        //                         </TableBody>
        //                     </Table>
        //                     {
        //                         this.props.isMoreUsersLoading === false && this.props.loadMoreErrorMessage === "" ?
        //                             <RaisedButton label="Load more" onClick={this.onLoadMoreUsersButtonClick.bind(this)} primary={true} /> :
        //                             <label style={style.errorLabel}>{this.props.loadMoreErrorMessage}</label>
        //                     }
        //                     {
        //                         this.props.isMoreUsersLoading === true && <div style={{ width: "20%", margin: "auto" }}><CircularProgress /></div>
        //                     }
        //                 </div>
        //             }
        //             {
        //                 this.props.isInitialLoading === true && <div style={style.centeredDiv}><CircularProgress /></div>
        //             }
        //             {
        //                 this.props.isInitialLoading === false && this.props.initialLoadErrorMessage !== "" && <label style={style.errorLabel}>{this.props.initialLoadErrorMessage}</label>
        //             }
        //         </CardText>
        //     </Card>
        // </Paper>;

        return <div>Chat room</div>
    }
}

const mapStateToProps = state => ({
    messagesList: getMessagesList(state),
    messagesListLoadError: getMessagesLoadErrorMessage(state),
    isMessagesLoading: getIsMessagesLoading(state),
    isMessagePosting: getIsMessagePosting(state),
    postMessageError: getPostMessageErrorMessage(state),
    loggedUserInfo: getLoggedUserInfo(state),
    otherUsersInfo: getOtherUsersInfo(state)
});

export default connect(mapStateToProps, {
    handleGetMessagesList,
    handlePostMessage
})(Chat);
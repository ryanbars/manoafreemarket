import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/item/:_id', {
  name: 'Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Item_Page' });
  },
});

FlowRouter.route('/post', {
  name: 'Post_Item',
  action() {
    BlazeLayout.render('App_Body', { main: 'Post_Item' });
  },
});

FlowRouter.route('/mychats/:_id', {
  name: 'My_Chats',
  action() {
    BlazeLayout.render('App_Body', { main: 'My_Chats' });
  },
});

FlowRouter.route('/chat/:_id', {
  name: 'Chat_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Chat_Page' });
  },
});

FlowRouter.route('/mybookmarks/:_id', {
  name: 'My_Bookmarks',
  action() {
    BlazeLayout.render('App_Body', { main: 'My_Bookmarks' });
  },
});

FlowRouter.route('/myprofile/:_id', {
  name: 'My_Profile',
  action() {
    BlazeLayout.render('App_Body', { main: 'My_Profile' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};

import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const colors = {
  orange: '#E48831',
  black: '#000',
  white: '#FFF',
  gray: '#C0C0C0',
};

export default getMuiTheme({
  palette: {
    textColor: colors.black,
    alternateTextColor: colors.white,
  },
  appBar: {
    color: colors.black,
    textColor: colors.white,
    height: 60,
  },
  flatButton: {
    color: colors.gray,
    textColor: colors.white,
  },
  raisedButton: {
    color: colors.orange,
    textColor: colors.white,
  }
});

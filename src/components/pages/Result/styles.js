const styles = (theme) => ({
    formInputs: {
        width: '40%',
        border: '1px solid gray',
        [theme.breakpoints.down('md')]: {
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
            },
        }
    },    
    main: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10,
        flexDirection: 'column',
        background: '#f0f2f5',
        height: 'max-content',
        minHeight: '100vh',
        paddingBottom: 60
    },    
    headerLinks: {
        width: '30%',
        [theme.breakpoints.down('md')]: {
            width: '45%',
            [theme.breakpoints.down('sm')]: {
                width: '85%',
            },
        },
        display: 'flex',
        justifyContent: 'space-between',
    },    
    headerLinksColor: {
        cursor: 'pointer',
        color: 'yellowgreen',
    },
    linkBackground: {
        color: 'white',
        fontSize: 21,
        width: '200px'
    },
    buttonPadding: {
        padding: 0,
    },
    buttonHeightMax: {
        height: 40
    },
    buttonHeightMin: {
        height: 30
    },

});

export default styles;

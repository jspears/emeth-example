import theme from 'emeth';
const styles = require.context('./theme', false, /\.cssm$/);

//No longer need to include styles in the index, this doosey does it for you.
const auto = styles.keys().reduce((ret, key) => {
    ret[key.replace(/(?:.+?\/)?(.+?)\.cssm/, '$1')] = styles(key);
    return ret;
}, {});


export default theme(auto);
import {connect} from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';
import Directory from './directory.component'


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

const DirectoryContainer = connect(mapStateToProps) (Directory)

export default DirectoryContainer;


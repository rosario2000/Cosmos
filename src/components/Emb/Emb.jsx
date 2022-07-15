import '../Emb/emb.css';
const Emb = ({path}) => {
    return ( 
        <div className="e ">
            <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={path} allowtransparency="true" title='Map'></iframe>
        </div>
     );
}
 
export default Emb;

/*https://api.le-systeme-solaire.net/rest/bodies/*/
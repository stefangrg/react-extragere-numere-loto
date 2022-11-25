export default function Number(props){
    return (
        <div className="number_box">
                <img src={props.image} alt="" className="number_img" />
                <span>{props.number}</span>
        </div>
    );
}
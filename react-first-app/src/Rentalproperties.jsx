import RentalList from './RentalList'
import './Csproperty.css';
export default function ({item})
{
    return (
        <div className="Csproperty">
            {item.map((i)=>(
                <RentalList key={i.id} {...i}/>
            )

            )}
        </div>
    );
}
import { useGetAllCardsQuery } from "../../redux/features/cardApi";

const SubmitRequest = () => {
    const {data} = useGetAllCardsQuery([]);
    console.log(data);
    
    return (
        <div>
            submit request page
        </div>
    );
};

export default SubmitRequest;
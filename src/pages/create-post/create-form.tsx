import {useForm} from "react-hook-form";
import * as yup from "yup";

export const CreateForm = () => {
    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a title."),
    });
    return (
    <form>
        <input placeholder="Title..." />
        <input placeholder="Description..." />
        <input type="submit" />
    </form>
    );
};
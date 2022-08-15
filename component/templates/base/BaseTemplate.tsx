
export interface IBaseTemplate {
    sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
    return <div className='bg-gradient-to-r from-cyan-500 to-slate-400 text-sky-400'>{sampleTextProp}</div>;
};

export default BaseTemplate;
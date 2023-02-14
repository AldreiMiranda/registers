interface Props {
  title: string;
  classes?: string;
  children: React.ReactNode;
}

const Widget = ({title, classes, children}: Props) => {
  return (
    <div className={`flex flex-col px-5 py-3 bg-gray-100 rounded ${classes}`}>
      <h3 className="font-bold text-2xl text-gray-600 mb-5">{title}</h3>
      {children}
    </div>
  )
}

export default Widget

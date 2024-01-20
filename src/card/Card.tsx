import className from 'classnames';

type ICardProps = {
  title: string;
  description: string;
  imgLink: string;
  hashtags?: string[];
  xl?: boolean;
  children?: string;
};

const Card = (props: ICardProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  const hashtags = props.hashtags?.map((hashtag) => (
    <span
      className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
      key={hashtag}
    >
      {hashtag}
    </span>
  ));

  return (
    <div className={btnClass}>
      {props.children}
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img
          className="w-full"
          src={props.imgLink}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{props.title}</div>
          <p
            className="text-base text-gray-700"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {props.description}
          </p>
        </div>
        {/* Put hashtags into array when free */}
        <div className="px-6 pb-2 pt-4">{hashtags}</div>
      </div>
    </div>
  );
};

export { Card };

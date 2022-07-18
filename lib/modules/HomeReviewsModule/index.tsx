import { HomeReviewsModuleProps, ReviewProps } from "./types";
import {
  PaddingContainer,
  ContainerScroll,
  Image,
  Container,
} from "../../components";
import RichText from "../../components/RichText";
const HomeHighlightModudle: React.FC<HomeReviewsModuleProps> = (props) => {
  return (
    <PaddingContainer
      paddingBottom={props.paddingBottom}
      paddingTop={props.paddingTop}
      color={props.backgroundColor}
      hasSeperator={props.hasSeperator || undefined}
    >
      <div className="relative">
        <Container>
          <h2 className="header-2 mb-12 max-w-2xl font-bold">
            <RichText content={props.title} />
          </h2>
        </Container>

        <ContainerScroll>
          {props.reviews.map((el, index) => {
            return (
              <div
                className="relative snap-center pr-5 last:pr-12 medium:snap-align-none"
                key={index}
              >
                <ReviewCard {...el} />
              </div>
            );
          })}
        </ContainerScroll>
      </div>
    </PaddingContainer>
  );
};

const ReviewCard: React.FC<ReviewProps> = (props) => {
  return (
    <div className="min-w-[335px] overflow-hidden rounded-lg bg-white shadow-lg large:flex large:h-[300px]">
      <div>
        <Image
          type="sanity"
          alt={props.image.alt ?? undefined}
          caption={props.image.caption ?? undefined}
          width={800}
          objectFit="cover"
          className="h-[300px] min-w-[300px] large:h-full large:w-full"
          asset={props.image.asset}
        />
      </div>

      <div className="relative p-6 large:min-w-[450px] large:py-8 large:px-12">
        <p className="header-4 relative mb-7 whitespace-nowrap font-bold">
          {props.name}
        </p>

        <div className="relative">
          <p className=" header-1 absolute top-0 -translate-x-7 -translate-y-6 text-[150px] text-gray-400">
            “
          </p>

          <p className=" header-1 absolute top-full right-0 origin-center translate-x-4 text-[150px] text-gray-400">
            ”
          </p>

          <p className="body-1 relative right-0 mb-4 block text-gray-900">
            {props.body}
          </p>
        </div>

        <p className="body-1 font-bold text-black">{props.title}</p>
      </div>
    </div>
  );
};

export default HomeHighlightModudle;

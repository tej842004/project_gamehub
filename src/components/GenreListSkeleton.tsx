import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List paddingY="5px">
      <Skeleton borderRadius={10} height="35px">
        <ListItem>
          <SkeletonText />
        </ListItem>
      </Skeleton>
    </List>
  );
};

export default GenreListSkeleton;

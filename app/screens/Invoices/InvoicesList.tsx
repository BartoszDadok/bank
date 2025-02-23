import { InvoicesResponse } from "@/app/api/tanstack-api/invoices";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { InvoiceItem } from "./InvoiceItem";
import { styles } from "./InvoicesList.styles";
import { useRef } from "react";

type InvoicesListProps = {
  invoices: InvoicesResponse;
  scrollOffset: number;
  setScrollOffset: (offset: number) => void;
  setExpandBottom: (expand: boolean) => void;
};

const InvoicesList = ({
  invoices,
  setExpandBottom,
  scrollOffset,
  setScrollOffset,
}: InvoicesListProps) => {
  const isScrolling = useRef<boolean>(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isScrolling.current) {
      setExpandBottom(scrollOffset > event.nativeEvent.contentOffset.y);
    }
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const onScrollBeginDrag = () => {
    isScrolling.current = true;
  };
  const onScrollEndDrag = () => {
    isScrolling.current = false;
  };

  return (
    <FlatList
      data={invoices}
      renderItem={({ item }) => <InvoiceItem invoice={item} />}
      keyExtractor={({ id }) => id}
      style={styles.list}
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      onScrollBeginDrag={onScrollBeginDrag}
      onScrollEndDrag={onScrollEndDrag}
      contentContainerStyle={styles.listContent}
    />
  );
};

export { InvoicesList };

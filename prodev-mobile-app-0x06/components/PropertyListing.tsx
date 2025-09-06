import { View } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
import { PropertyListingData } from "@/interfaces";

const PropertyListing = ({ listings }: PropertyListingData) => {
    return (
        <View
            style={{
                flex: 1,
                rowGap: 10,
            }}
        >
            {listings?.map((listing, key) => (
                <PropertyListingCard {...listing} key={key} />
            ))}
        </View>
    );
};

export default PropertyListing;
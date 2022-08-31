import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sharwamaHub from "../../api";
const initialState = {
  products: [
    {
      sharwarma: [
        {
          id: 1,
          name: "Sharwarma Classic",
          price: 1300,
          image:
            "https://t3.ftcdn.net/jpg/03/94/39/14/360_F_394391470_i2fwSy9J0nIiGULYEBaJbWiAHLcs46pd.jpg",
          desc: "The classic pack is a delicious and creamy filling of marinated chicken or beef with no sausage.",
        },
        {
          id: 2,
          name: "Sharwarma Regular",
          price: 1500,
          image:
            "https://static.toiimg.com/thumb/64696930.cms?imgsize=329052&width=800&height=800",

          desc: "This regular pack is delicious and creamy fillings of marinated chicken or beef with one sausage.",
        },
        {
          id: 3,
          name: "Sharwarma Special",
          price: 1800,
          image:
            "https://www.nairaland.com/attachments/10932851_f1e34e23c7f846c994daece4659cb61e_jpeg_jpege11b2f8a9b4fe89b9376f89f097a82a6",
          desc: "Special shawarma, delicious and creamy fillings of marinated chicken or beef with two sausages.",
        },
        {
          id: 4,
          name: "King Size Sharwarma",
          price: 2300,
          image:
            "https://fabshawarma.com/wp-content/uploads/2020/06/FAB-32.jpg",
          desc: "King size shawarma is delicious and creamy fillings of marinated chicken or beef with one sausages.",
        },
        {
          id: 5,
          name: "King Size Special",
          price: 2800,
          image:
            "https://fabshawarma.com/wp-content/uploads/2020/06/FAB-24-600x553.jpg",
          desc: "King size special shawarma is delicious and creamy fillings of marinated chicken or beef with two sausages.",
        },
      ],
      smoothie: [
        {
          id: 6,
          name: "Pineapple Special",
          price: 1000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwe6_wnXfGiWQPJvc-jwihFQfce_IkjHahA&usqp=CAU",
          desc: " Refreshing pineapple smoothie recipe delivers a burst of tropical flavors with each sip!",
        },
        {
          id: 7,
          name: "Water melon special",
          price: 1000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsY50Xf7PDzChX3fJ0KK9GLXWvRCktNJjbA&usqp=CAU",
          desc: "Our creamy watermelon smoothie is full of vitamins and makes the perfect quick breakfast, after school snack, summer evening treat, or mid-day snack.",
        },
        {
          id: 8,
          name: "Mixed Fruit Smoothie",
          price: 2000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKtAmQPr1RyxXMbBJ0Q580nK9AjrNFZAb_A&usqp=CAU",
          desc: "A refreshing blend of fresh fruits like strawberries, bananas and guava, this smoothie recipe is enough to make your summer days delightful.",
        },
        {
          id: 9,
          name: "Tropicana Smoothie",
          price: 2000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbcO-xEGst1OYvoJ9DXcrs-SZ5lOeUEx7YQ&usqp=CAU",
          desc: "Imagine yourself in the tropics! The Tropicana Smoothie is full of tropical fruit flavors – a great way to start your day",
        },
        {
          id: 10,
          name: "Island Smoothie",
          price: 2000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcL-1gDiJ_OXYpZtm1SlVOddzTalRzMO7QFQ&usqp=CAU",
          desc: "Island Green Smoothie is made with a refreshing blend of frozen fruit, spinach, and a splash of coconut milk. One sip and this smoothie will have you dreaming of the tropics!",
        },
        {
          id: 11,
          name: "Berry Blast Smoothie",
          price: 2000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59ECSgUZfqEEAyXcS9YCLIzTmHReGEF9qCg&usqp=CAU",
          desc: "Berry Blast Smoothies are a refreshing and delicious way to enjoy a hot summer day. These smoothies are full of yummy berry flavor and a cinch to make!",
        },
      ],
      burger: [
        {
          id: 12,
          name: "Hub Burger Regular",
          price: 1500,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1c9gIYTAwPs7kUUOLOKR9p_bU15GIX7arSA&usqp=CAU",
          desc: "An equally delicious  build, featuring a Beyond Meat patty, smoky corn tortilla chips (brushed with Honest hot sauce and deep-fried)",
        },
        {
          id: 13,
          name: "Hub Burger special",
          price: 2500,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQqmEOl4jKUZyfa0oWT8BK6KQ5RVsAs_Wxg&usqp=CAU",
          desc: "Beyond Meat patty, tortilla chips, chipotle jackfruit with Frank’s, vegan gouda, BBQ sauce, guac, pink onions with homemade rosemary salted chips",
        },
      ],
      Sandwich: [
        {
          id: 14,
          name: "Hub Sandwich Regular",
          price: 1500,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABq_B3faDD-zyBH3dA-vK43z7TWlDxsOBIw&usqp=CAU",
          desc: "This is a sweet and spicy sandwich is loaded with a fine  vegetable filling of cabbage, carrot, onion.",
        },
        {
          id: 15,
          name: "Hub Sandwich special",
          price: 2500,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-KhKlCjSR8mx5JWCZw4FGuhSGUkEZiwWww&usqp=CAU",
          desc: "",
        },
      ],
      Popcorn: [
        {
          id: 16,
          name: "Pop corn Regular",
          price: 500,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2B2pt3H7B0PBOjb81cOYigr-8QoeVhwDzJQ&usqp=CAU",
          desc: "The evergreen, tasty, and addictive snack popped out from a fine blend of roasted corn kernels & tossed with butter, spices & flavours.",
        },
        {
          id: 17,
          name: "Pop corn Large",
          price: 1000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCX6eCi0KJTU-V-lXchkDcf7J0IqMmeVF-qg&usqp=CAU",
          desc: "Grab yourself a bowl of this superfine perfectly salty, buttery, and crunchy popcorn. This homemade popcorn is the ultimate bowl of joy for a fine movie night.",
        },
      ],
      more: [
        {
          id: 18,
          name: "Chicken salad",
          price: 1500,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYP0e-emTPtNMBYXCvf9Al9EFI9UkjgKpx7g&usqp=CAU",
          desc: "A family favorite chicken salad made from baked thighs and breasts sprinkled with rosemary.",
        },
        {
          id: 19,
          name: "Milk Shake",
          price: 2000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBzKrd41q7fvqav1mmJscE85nkNnQaKKOug&usqp=CAU",
          desc: "There’s really nothing better than treating yourself to a milkshake on a hot day!",
        },
        {
          id: 20,
          name: "ice Cream(Fun Blast)",
          price: 500,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCWw51ZkxaGPVJZRBA0WHL1X3-_3djoy5jA&usqp=CAU",
          desc: "An old fashioned vanilla ice cream recipe that everyone loves!",
        },
        {
          id: 21,
          name: "Ice Cream(200ml)",
          price: 600,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_O4b3OT2Pio2riQYeeaZz8dAwwxeLFqD0w&usqp=CAU",
          desc: "If you love a smooth curl of ice cream when you scoop, try this recipe, which uses heavy cream and goat milk to create a luscious dessert, with just a bit of tang.",
        },
        {
          id: 22,
          name: "Ice cream(500ml)",
          price: 1000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIxaoiFMhx5M8AbQeXhQZ1V52sIoLkIDBaJw&usqp=CAU",
          desc: "A summertime staple, a late-night favorite, a cure-all for nearly any bad mood, and the perfect treat for all celebrations. Any time is the right time for ice cream.",
        },
        {
          id: 23,
          name: "Ice Cream(2litres)",
          price: 2800,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrf7qZQCzdehPrTCUhNlxuz4yQIa1yPmO5_Q&usqp=CAU",
          desc: "That comforting, icy-cold deliciousness tastes even better when freshly made at home with simple, wonderfully indulgent ingredients.",
        },
        {
          id: 24,
          name: "Ice Cream(4litres)",
          price: 5500,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTFE9vkyv9_PA5paH958mGoLRpwd-uinKLA&usqp=CAU",
          desc: "This homemade ice cream recipe has a heavenly vanilla flavor, a divinely smooth and creamy texture and freezes beautifully for ice cream cones and sundaes.",
        },
      ],
    },
  ],
  category: ["Sharwama", "Burger", "SandWich", "Popcorn", "Smoothies", "More"],
  loading: false,
  error: null,
};

//get products

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await sharwamaHub.get("/products");
    return response.data;
  }
);
export const getCategory = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await sharwamaHub.get("/api/v1/categories");
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});

export const getAllProducts = (state) => state.products?.products;
export const getProductsLoading = (state) => state.products?.loading;
export const getProductsError = (state) => state.products?.error;
export const getAllCategory = (state) => state.products?.category;

export default productsSlice.reducer;

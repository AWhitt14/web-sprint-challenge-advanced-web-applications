import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchData as mockFetchData} from '../utils/FetchData';

jest.mock('../utils/FetchData');


const dummyData = {data: {color: "aliceblue", code: {"hex":"#f0f8ff"}, id :1}}
test("Fetches data and renders the bubbles", () => {
  mockFetchData.mockResolvedValueOnce(dummyData);
  const { getAllByTestId} = render(<BubblePage />);
});

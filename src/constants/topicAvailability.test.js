import { describe, expect, it } from "vitest";
import { getAvailableTopics, isTopicAvailable } from "./topicAvailability";

const temporaryTopic = { id: "examReview", availableUntil: 1000 };

describe("topic availability", () => {
  it("mantiene visible una sección temporal antes de su fecha límite", () => {
    expect(isTopicAvailable(temporaryTopic, 999)).toBe(true);
  });

  it("la oculta exactamente al llegar la fecha límite", () => {
    expect(isTopicAvailable(temporaryTopic, 1000)).toBe(false);
    expect(getAvailableTopics([temporaryTopic, { id: "permanent" }], 1000)).toEqual([{ id: "permanent" }]);
  });
});

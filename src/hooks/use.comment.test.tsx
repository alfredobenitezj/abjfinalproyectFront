import { CommentRepository } from "../services/comment.repository";

// Mock global fetch function
global.fetch = jest.fn();

describe("CommentRepository", () => {
  const mockUrl = "http://test.url";

  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  describe("getAll method", () => {
    test("should fetch all comments", async () => {
      const mockData = {
        items: [{ id: "1", message: "Mock comment" }],
      };
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockData),
      });

      const repo = new CommentRepository(mockUrl);
      const comments = await repo.getAll();

      expect(global.fetch).toHaveBeenCalledWith(mockUrl);
      expect(comments).toEqual(mockData.items);
    });
  });

  describe("createComment and updateComment methods", () => {
    test("should handle create and update operations correctly", async () => {
      const mockCreateComment = { message: "New Mock comment" };
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockCreateComment),
      });

      const repo = new CommentRepository(mockUrl);
      const createdComment = await repo.createComment(mockCreateComment);

      expect(global.fetch).toHaveBeenCalledWith(mockUrl, expect.any(Object));
      expect(createdComment).toEqual(mockCreateComment);

      const mockId = "1";
      const mockUpdateComment = { id: mockId, message: "Updated Mock comment" };
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUpdateComment),
      });

      const updatedComment = await repo.updateComment(
        mockId,
        mockUpdateComment
      );

      expect(global.fetch).toHaveBeenCalledWith(
        `${mockUrl}comments/update/${mockId}`,
        expect.any(Object)
      );
      expect(updatedComment).toEqual(mockUpdateComment);
    });
  });
});
